// components/LinkText.jsx
function LinkText({ label, href }) {
    return (
      <a href={href} className="font-medium text-indigo-600 hover:text-indigo-500">
        {label}
      </a>
    );
  }
  
  export default LinkText;
  