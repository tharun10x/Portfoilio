export default function Button({ variant = 'primary', size = 'md', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold font-sans rounded-xl transition duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring focus-visible:ring-[#FF00C8]/15';
  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-lg px-6 py-2', 
    lg: 'text-xl px-7 py-3',
  };
  const variants = {
    primary: 'bg-[#00FFFF] text-[#0f0f1b] shadow-md hover:shadow-[0_0_25px_-4px_#00FFFF] hover:brightness-110',
    outline: 'bg-transparent text-[#e6e6e6] border border-[#00FFFF]/60 shadow-sm hover:shadow-[0_0_25px_-6px_#00FFFF] hover:bg-[#00FFFF]/10',
  };
  return (
    <button className={`${base} ${sizes[size] || sizes.md} ${variants[variant] || ''} ${className}`} {...props} />
  );
}
