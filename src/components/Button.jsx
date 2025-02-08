/* eslint-disable react/prop-types */
const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit overflow-hidden rounded-full px-7 py-3 text-black ${containerClass} cursor-pointer transition-colors duration-300 hover:!bg-black hover:text-yellow-300`}
    >
      {leftIcon}

      <span className="incline-flex relative overflow-hidden font-general text-xs uppercase">
        <div> {title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
