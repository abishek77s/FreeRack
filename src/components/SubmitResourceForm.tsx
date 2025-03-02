import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { allCategories } from '../data/categories';
import { Resource, ResourceType } from '../types';

interface SubmitResourceFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

type FormData = {
  title: string;
  description: string;
  url: string;
  type: ResourceType;
  categories: string[];
  author?: string;
  tags?: string[];
};

const resourceTypes: ResourceType[] = [
  'github',
  'youtube',
  'book',
  'pdf',
  'course',
  'database',
  'website',
];

const SubmitResourceForm: React.FC<SubmitResourceFormProps> = ({ onClose, onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tagInput, setTagInput] = useState('');
  
  const { 
    register, 
    handleSubmit, 
    control,
    setValue,
    watch,
    formState: { errors } 
  } = useForm<FormData>({
    defaultValues: {
      tags: []
    }
  });

  const tags = watch('tags') || [];

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setValue('tags', [...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setValue('tags', tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const newResource = {
        ...data,
        dateAdded: new Date().toISOString().split('T')[0],
        approved: false
      };
      
      const { error } = await supabase
        .from('resources')
        .insert([newResource]);
      
      if (error) throw error;
      
      onSuccess();
    } catch (err) {
      console.error('Error submitting resource:', err);
      setError('Failed to submit resource. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold text-gray-900">
            Submit a Resource
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          >
            <X className="w-5 h-5" />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          
          <div className="grid gap-4 mb-4 grid-cols-1 md:grid-cols-2">
            <div className="md:col-span-2">
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                className={`bg-gray-50 border ${errors.title ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                placeholder="Resource title"
                {...register('title', { required: 'Title is required' })}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
              )}
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                rows={3}
                className={`bg-gray-50 border ${errors.description ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                placeholder="Brief description of the resource"
                {...register('description', { required: 'Description is required' })}
              ></textarea>
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
              )}
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900">
                URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="url"
                className={`bg-gray-50 border ${errors.url ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                placeholder="https://example.com"
                {...register('url', { 
                  required: 'URL is required',
                  pattern: {
                    value: /^https?:\/\/.+\..+/,
                    message: 'Please enter a valid URL'
                  }
                })}
              />
              {errors.url && (
                <p className="mt-1 text-sm text-red-500">{errors.url.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900">
                Resource Type <span className="text-red-500">*</span>
              </label>
              <select
                id="type"
                className={`bg-gray-50 border ${errors.type ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                {...register('type', { required: 'Resource type is required' })}
              >
                <option value="">Select type</option>
                {resourceTypes.map(type => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
              {errors.type && (
                <p className="mt-1 text-sm text-red-500">{errors.type.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900">
                Author (optional)
              </label>
              <input
                type="text"
                id="author"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Resource author"
                {...register('author')}
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Tags (optional)
              </label>
              <div className="flex items-center mb-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Add tags (press Enter)"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="ml-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
              
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-1.5 text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
              
              <Controller
                control={control}
                name="tags"
                render={() => <></>} // Hidden controller, we're managing the state manually
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Categories <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 border border-gray-300 rounded-lg">
                <Controller
                  control={control}
                  name="categories"
                  rules={{ required: 'Select at least one category' }}
                  defaultValue={[]}
                  render={({ field }) => (
                    <>
                      {allCategories.map((category) => (
                        <div key={category.id} className="flex items-center">
                          <input
                            id={`category-${category.id}`}
                            type="checkbox"
                            value={category.id}
                            checked={field.value?.includes(category.id)}
                            onChange={(e) => {
                              const value = e.target.value;
                              const newValues = e.target.checked
                                ? [...(field.value || []), value]
                                : (field.value || []).filter((v) => v !== value);
                              field.onChange(newValues);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor={`category-${category.id}`}
                            className="ms-2 text-sm font-medium text-gray-900"
                          >
                            {category.name}
                          </label>
                        </div>
                      ))}
                    </>
                  )}
                />
              </div>
              {errors.categories && (
                <p className="mt-1 text-sm text-red-500">{errors.categories.message}</p>
              )}
            </div>
          </div>
          
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-blue-400"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Resource'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitResourceForm;