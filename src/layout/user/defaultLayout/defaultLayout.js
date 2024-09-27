import Headers from "../header/header";
import Footer from "../footer/footer"
import ChatFrame from "../../../pages/user/chat"

function DefaultLayout({children}){
    return (
        <div>
            <Headers/>
            <div className="contentmain">
            {children}
            </div>
            <Footer/>
            <ChatFrame/>
        </div>
    );
}

export default DefaultLayout;