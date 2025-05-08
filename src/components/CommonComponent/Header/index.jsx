const Header = () => {
  return (
    <div className="flex flex-row gap-5 justify-center items-center my-10">
      <div className="avatar">
        <div className="w-32 rounded">
          <img src="https://img.daisyui.com/images/profile/demo/superperson@192.webp" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-20 rounded">
          <img
            src="https://img.daisyui.com/images/profile/demo/superperson@192.webp"
            alt="Tailwind-CSS-Avatar-component"
          />
        </div>
      </div>
      <div className="avatar">
        <div className="w-16 rounded">
          <img
            src="https://img.daisyui.com/images/profile/demo/superperson@192.webp"
            alt="Tailwind-CSS-Avatar-component"
          />
        </div>
      </div>
      <div className="avatar">
        <div className="w-8 rounded">
          <img
            src="https://img.daisyui.com/images/profile/demo/superperson@192.webp"
            alt="Tailwind-CSS-Avatar-component"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
