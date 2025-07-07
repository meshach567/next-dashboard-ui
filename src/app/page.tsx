import DashboardLayout from "./(dashboard)/layout"

const Homepage = () => {
  return (
    <div className=''>
      <DashboardLayout>
        <div className="flex items-center justify-center h-full">
          <h1 className="text-2xl font-bold">Welcome to SchooLama!</h1>
        </div>
      </DashboardLayout>
    </div>
  )
}

export default Homepage