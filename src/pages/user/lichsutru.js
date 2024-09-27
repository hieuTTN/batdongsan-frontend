import logomini from '../../assest/images/logomini.svg'
import { useState, useEffect } from 'react'
import { Parser } from "html-to-react";
import ReactPaginate from 'react-paginate';
import {toast } from 'react-toastify';
import Select from 'react-select';
import {getMethod, postMethod, postMethodPayload} from '../../services/request';
import Swal from 'sweetalert2'
import { formatMoney } from '../../services/money';

function LichSuTru(){
    const [items, setItems] = useState([]);
    useEffect(()=>{
        const getPay = async() =>{
            var response = await getMethod('/api/deduction-history/user/my-DeductionHistory')
            var result = await response.json();
            setItems(result)
        };
        getPay();
    }, []);
  
    return(
        <>
             <div class="blockcontent">
                <h3>Lịch sử trừ tiền</h3>
                <div class="ghichuql">
                    <p>Sau khi đăng phòng, mỗi tin đăng bạn sẽ bị trừ một khoản phí cố định</p>
                    <a href="lienhe">Liên hệ</a>
                </div>
                <div class="table-responsive divtale">
                    <table class="table table-bordered table-striped" width="100%">
                        <thead>
                            <tr>
                                <th class="nowrap">Ngày trừ</th>
                                <th class="nowrap">Số tiền</th>
                                <th class="nowrap">Nội dung</th>
                            </tr>
                        </thead>
                        <tbody id="listhistory">
                            {items.map((item=>{
                                return <tr>
                                    <td>{item.createdTime}, {item.createdDate}</td>
                                    <td>{item.createdTime}, {item.createdDate}</td>
                                    <td>Tin đăng: <span className='blue-text'>{item.realEstateTitle}</span></td>
                                </tr>
                            }))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default LichSuTru;
