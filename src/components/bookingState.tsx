type props = {
    state: number
}
const BookingStateWidget = ({ state }: props) => {
    return (
        <div className="flex flex-row w-full h-10 bg-white rounded-md ">
            <div className={`flex flex-1 border border-white ${state === 0 ? "bg-white text-black font-medium" : " bg-black text-white"} rounded-tl-md justify-center items-center  rounded-bl-md`}>
                <span>เลือก รอบภาพยนตร์</span>
            </div>
            <div className={`flex flex-1 border border-white ${state === 1 ? "bg-white text-black font-medium" : " bg-black text-white"} rounded-tl-md justify-center items-center rounded-bl-md`}>
                <span>เลือกที่นั่ง</span>
            </div>
            <div className={`flex flex-1 border border-white ${state === 2 ? "bg-white text-black font-medium" : " bg-black text-white"} rounded-tl-md justify-center items-center rounded-bl-md`}  >
                <span>ชําระเงิน</span>
            </div>
        </div>
    )
}
export default BookingStateWidget