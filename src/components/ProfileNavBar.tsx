
const ProfileNavbar = ({ username, isConnected }:{username:string, isConnected:boolean}) => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Mi App</div>
        <div className="flex items-center">
          {username ? (
            <>
              <div className="text-white mr-2">{username}</div>
              <div
                className={`${
                  isConnected ? 'bg-green-500' : 'bg-red-500'
                } h-4 w-4 rounded-full`}
              ></div>
            </>
          ) : (
            <div className="text-white">Desconectado</div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default ProfileNavbar;
