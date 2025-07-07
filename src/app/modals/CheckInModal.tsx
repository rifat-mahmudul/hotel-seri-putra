import { X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Dispatch, SetStateAction } from "react";

const GuestInfoModal = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  AOS.init();

  return (
    <div
      className={`${
        isModalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
      } w-full h-screen fixed top-0 left-0 z-[200000000] dark:bg-black/40 bg-[#00000098] flex items-center justify-center transition-all duration-300`}
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className={`w-[90%] md:w-[70%] dark:bg-slate-800 bg-secondary p-6 max-h-[90vh] overflow-y-auto`}
      >
        <div className="w-full flex justify-between items-start mb-6">
          <div>
            <h2 className="text-[1.7rem] dark:text-[#abc2d3] font-[500] text-[#202020]">
              Guest Information Update
            </h2>
            <p className="text-[1rem] dark:text-[#abc2d3]/80 text-[#525252]">
              Update guest details and payment information
            </p>
          </div>

          <X
            className="cursor-pointer text-black dark:text-white"
            onClick={() => setIsModalOpen(false)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Guest Information Column */}
          <div className="space-y-4">
            <h3 className="font-medium dark:text-[#abc2d3] text-[#202020] border-b pb-2">
              Guest Details
            </h3>

            <div>
              <label className="block text-sm font-medium dark:text-[#abc2d3]/80 text-[#525252] mb-1">
                Guest Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border dark:border-slate-700 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none"
                placeholder="Enter guest name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-[#abc2d3]/80 text-[#525252] mb-1">
                Contact No
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border dark:border-slate-700 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none"
                placeholder="Enter contact number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-[#abc2d3]/80 text-[#525252] mb-1">
                IC/Passport No.
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border dark:border-slate-700 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none"
                placeholder="Enter IC/Passport number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-[#abc2d3]/80 text-[#525252] mb-1">
                Address
              </label>
              <textarea
                className="w-full px-3 py-2 border dark:border-slate-700 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none"
                placeholder="Enter address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-[#abc2d3]/80 text-[#525252] mb-1">
                Photo
              </label>
              <input
                type="file"
                className="w-full px-3 py-1.5 border dark:border-slate-700 dark:bg-slate-700 dark:text-white rounded-md text-sm focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-[#abc2d3]/80 text-[#525252] mb-1">
                Source of guest
              </label>
              <select className="w-full px-3 py-2 border dark:border-slate-700 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none">
                <option value="">Select source</option>
                <option value="walk-in">Walk-in</option>
                <option value="online">Online</option>
                <option value="agency">Agency</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-[#abc2d3]/80 text-[#525252] mb-1">
                Booking ID
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border dark:border-slate-700 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none"
                placeholder="Enter booking ID"
              />
            </div>
          </div>

          {/* Room Selection Column */}
          <div className="space-y-4">
            <h3 className="font-medium dark:text-[#abc2d3] text-[#202020] border-b pb-2">
              Room Selection
            </h3>

            <div>
              <label className="block text-sm font-medium dark:text-[#abc2d3]/80 text-[#525252] mb-1">
                Room No
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border dark:border-slate-700 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none"
                placeholder="Enter room number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-[#abc2d3]/80 text-[#525252] mb-1">
                Check-in Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border dark:border-slate-700 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-[#abc2d3]/80 text-[#525252] mb-1">
                Checkout Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border dark:border-slate-700 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-[#abc2d3]/80 text-[#525252] mb-1">
                No Of Stay
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border dark:border-slate-700 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none"
                placeholder="Enter number of nights"
              />
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-[#abc2d3]/80 text-[#525252] mb-1">
                Rate/Night
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border dark:border-slate-700 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none"
                placeholder="Enter rate per night"
              />
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-[#abc2d3]/80 text-[#525252] mb-1">
                Total Payment
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border dark:border-slate-700 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none"
                placeholder="Enter total payment"
              />
            </div>
          </div>

          {/* Payment Update Column */}
          <div className="space-y-4">
            <h3 className="font-medium dark:text-[#abc2d3] text-[#202020] border-b pb-2">
              Payment Update
            </h3>

            <div>
              <label className="block text-sm font-medium dark:text-[#abc2d3]/80 text-[#525252] mb-1">
                Date of Payment
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border dark:border-slate-700 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-[#abc2d3]/80 text-[#525252] mb-1">
                Total Payment
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border dark:border-slate-700 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none"
                placeholder="Enter total payment"
              />
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-[#abc2d3]/80 text-[#525252] mb-1">
                Rate/Night
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border dark:border-slate-700 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none"
                placeholder="Enter rate per night"
              />
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-[#abc2d3]/80 text-[#525252] mb-1">
                Payment type
              </label>
              <select className="w-full px-3 py-2 border dark:border-slate-700 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none">
                <option value="">Select payment type</option>
                <option value="cash">Cash</option>
                <option value="credit-card">Credit Card</option>
                <option value="debit-card">Debit Card</option>
                <option value="bank-transfer">Bank Transfer</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-[#abc2d3]/80 text-[#525252] mb-1">
                RCV Amount
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border dark:border-slate-700 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none"
                placeholder="Enter received amount"
              />
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-[#abc2d3]/80 text-[#525252] mb-1">
                Due
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border dark:border-slate-700 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none"
                placeholder="Enter due amount"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3 w-full justify-end mt-6">
          <button
            className="px-4 py-2 border border-gray-300 rounded-lg"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-gradient-to-r from-[#003780] to-[gray] text-white rounded-lg"
            onClick={() => setIsModalOpen(false)}
          >
            Check In
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestInfoModal;
