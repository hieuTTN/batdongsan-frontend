import layoutAdmin from '../layout/admin/Layout'
import layoutLogin from '../layout/user/loginlayout/login'
import AccountLayout from '../layout/user/accountLayout/accountLayout'

//admin
import homeAdmin from '../pages/admin/index'
import userAdmin from '../pages/admin/user'
import AdminCategory from '../pages/admin/category'
import AdminBlog from '../pages/admin/blog'
import AdminAddBlog from '../pages/admin/addblog'
import AdminHistoryPay from '../pages/admin/historypay'
import AdminDeductionHistory from '../pages/admin/deductionhistory'
import AdminRealEstate from '../pages/admin/realestate'



//public
import login from '../pages/public/login'
import index from '../pages/public/index'

//user
import taikhoan from '../pages/user/taikhoan'
import DoiMatKhau from '../pages/user/doimatkhau'
import BaoGia from '../pages/user/baogia'
import NapTien from '../pages/user/naptien'
import ThanhCong from '../pages/user/thanhcong'
import LichSuNap from '../pages/user/lichsunap'
import LichSuTru from '../pages/user/lichsutru'
import DangTin from '../pages/user/dangtin'



const publicRoutes = [
    { path: "/", component: index},
    { path: "/index", component: index},
    { path: "/login", component: login, layout: layoutLogin },
];

const userRoutes = [
    { path: "/doimatkhau", component: DoiMatKhau, layout:AccountLayout },
    { path: "/baogia", component: BaoGia, layout:AccountLayout },
    { path: "/naptien", component: NapTien, layout:AccountLayout },
    { path: "/thanhcong", component: ThanhCong, layout:AccountLayout },
    { path: "/lichsunap", component: LichSuNap, layout:AccountLayout },
    { path: "/lichsutru", component: LichSuTru, layout:AccountLayout },
    { path: "/taikhoan", component: taikhoan, layout:AccountLayout },
    { path: "/dangtin", component: DangTin, layout:AccountLayout },
];


const adminRoutes = [
    { path: "/admin/index", component: homeAdmin, layout: layoutAdmin },
    { path: "/admin/user", component: userAdmin, layout: layoutAdmin },
    { path: "/admin/category", component: AdminCategory, layout: layoutAdmin },
    { path: "/admin/blog", component: AdminBlog, layout: layoutAdmin },
    { path: "/admin/add-blog", component: AdminAddBlog, layout: layoutAdmin },
    { path: "/admin/history-pay", component: AdminHistoryPay, layout: layoutAdmin },
    { path: "/admin/deduction-history", component: AdminDeductionHistory, layout: layoutAdmin },
    { path: "/admin/real-estate", component: AdminRealEstate, layout: layoutAdmin },
];



export { publicRoutes, adminRoutes, userRoutes};
