import Headers from "../header/header";
import SideBar from "../sidebar/sidebar"
import ChatFrame from "../../../pages/user/chat"

function AccountLayout({children}){
    return (
        <div>
            <Headers/>
            <div class="contentmain contentbaiviet">
                <div class="container-fluid">
                    <div class="row flex-nowrap">
                        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 navbarleft">
                            <div class="d-flex flex-column px-3 pt-2 text-white" id="navbartaikhoan">
                                <SideBar/>
                            </div>
                        </div>
                        <div class="col py-3">
                            <div class="contentright" >
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ChatFrame/>
        </div>
    );
}

export default AccountLayout;