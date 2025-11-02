import React, { useState } from 'react';
import useAppStore from '../store/useAppStore';
import Input from './ui/Input';
import Button from './ui/Button';
import Card from './ui/Card';

/**
 * UserInputForm - Form to collect user data (DOB, Name, Gender)
 */
const UserInputForm = () => {
  const { userData, setUserField, generateReport, isLoading } = useAppStore();

  const [formData, setFormData] = useState({
    dob: userData.dob || '',
    name: userData.name || '',
    gender: userData.gender || 'Male'
  });

  /**
   * Handle input change
   */
  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
    setUserField(field, value);
  };

  /**
   * Handle form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.dob) {
      alert('Please enter your date of birth');
      return;
    }

    if (!formData.name) {
      alert('Please enter your name');
      return;
    }

    // Generate report
    generateReport();
  };

  return (
    <Card className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
        Enter Your Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Date of Birth */}
        <Input
          type="date"
          label="Date of Birth"
          value={formData.dob}
          onChange={handleChange('dob')}
          placeholder="Select your date of birth"
          required
          className="w-full"
        />

        {/* Name */}
        <Input
          type="text"
          label="Name"
          value={formData.name}
          onChange={handleChange('name')}
          placeholder="Enter your full name"
          required
          className="w-full"
        />

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Gender
            <span className="text-red-400 ml-1">*</span>
          </label>
          <select
            value={formData.gender}
            onChange={handleChange('gender')}
            required
            className="input-field w-full"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Generating Report...' : 'Generate Numerology Report'}
        </Button>
      </form>

      {/* Additional Info */}
      <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
        <p className="text-sm text-gray-300 text-center">
          Your data is stored locally and never shared with third parties.
        </p>
      </div>
    </Card>
  );
};

export default UserInputForm;
