const ExamBtn = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <button
        className="text-[#2575A6] text-lg border-2 rounded-md w-full py-1 transition hover:bg-[#2575A6] hover:text-white cursor-pointer"
      >
       Start Exam
      </button>
    </div>
  );
};

export default ExamBtn;
