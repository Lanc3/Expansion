const AppFooterCopyright = () => {
  return (
    <div className="font-general-regular flex items-center justify-center text-center">
      <p className="px-4">Expansion.ie</p>
      <div className="pr-2 text-lg text-ternary-dark ">
        &copy; {new Date().getFullYear()}
      </div>
    </div>
  )
}

export default AppFooterCopyright
