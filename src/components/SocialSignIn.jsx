// components/SocialSignIn.jsx

//platform, iconPath, url

function SocialSignIn({ icon, text, url }) {
    return (
      /*<a
        href={url}
        className="flex items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <img src={iconPath} alt={`${platform} logo`} className="h-5 w-5" />
        Sign in with {platform}
      </a>*/

      <a href={url} className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent">
        {icon}
        <span className="text-sm font-semibold leading-6">{text}</span>
      </a>
    );
  }
  
  export default SocialSignIn;
  