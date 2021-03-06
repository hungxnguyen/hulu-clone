function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col items-center group cursor-pointer w-12 sm:w-20 hover:text-white">
      <Icon className="h-7 mb-1 group-hover:animate-bounce group-hover:text-green-500" />
      <p className="opacity-0 group-hover:opacity-100 text-xs tracking-widest sm:text-sm">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
