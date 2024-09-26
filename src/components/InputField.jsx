// components/InputField.jsx
function InputField({ id, label, type, autoComplete, placeholder = '' }) {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-900">
          {label}
        </label>
        <input
          id={id}
          name={id}
          type={type}
          autoComplete={autoComplete}
          required
          placeholder={placeholder}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    );
  }
  
  export default InputField;
  