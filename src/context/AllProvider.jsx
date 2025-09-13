import UserProvider from "./userContext";
import ChatProvider from "./chatContext";
//Provider가독성 개선용 문서
const AllProvider = ({ children }) => {
  return (
    <UserProvider>
      <ChatProvider>
            {children}
      </ChatProvider>
    </UserProvider>
  );
};

export default AllProvider;