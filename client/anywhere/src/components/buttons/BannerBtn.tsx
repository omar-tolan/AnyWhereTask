const BannerBtn = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <button
        className="bg-[#2575A6] text-white rounded-md w-full px-10 py-4 hover:opacity-90 cursor-pointer"
      >
        View exam tips
      </button>
    </div>
  );
};

export default BannerBtn;
