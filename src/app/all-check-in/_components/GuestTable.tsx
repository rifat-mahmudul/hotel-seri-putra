import Image from "next/image";

// Define the type for guest data
interface GuestData {
  id: string;
  guestName: string;
  contactNo: string;
  passportNo: string;
  address: string;
  photo: string;
  guestSource: string;
  bookingId: string;
  roomNo: string;
  checkinDate: string;
  checkoutDate: string;
  nights: number;
  ratePerNight: number;
  totalPayment: number;
  paymentDate: string;
  paymentType: string;
  receivedAmount: number;
  dueAmount: number;
}

const GuestTable = () => {
  // Dummy data
  const dummyGuests: GuestData[] = [
    {
      id: "1",
      guestName: "John Doe",
      contactNo: "+1234567890",
      passportNo: "AB1234567",
      address: "123 Main St, New York, USA",
      photo: "/profile1.jpg",
      guestSource: "Online",
      bookingId: "BK2023001",
      roomNo: "101",
      checkinDate: "2023-05-15",
      checkoutDate: "2023-05-20",
      nights: 5,
      ratePerNight: 150,
      totalPayment: 750,
      paymentDate: "2023-05-14",
      paymentType: "Credit Card",
      receivedAmount: 750,
      dueAmount: 0,
    },
    {
      id: "2",
      guestName: "Jane Smith",
      contactNo: "+9876543210",
      passportNo: "CD7654321",
      address: "456 Oak Ave, London, UK",
      photo: "/profile2.jpg",
      guestSource: "Walk-in",
      bookingId: "BK2023002",
      roomNo: "205",
      checkinDate: "2023-06-01",
      checkoutDate: "2023-06-05",
      nights: 4,
      ratePerNight: 200,
      totalPayment: 800,
      paymentDate: "2023-06-01",
      paymentType: "Cash",
      receivedAmount: 500,
      dueAmount: 300,
    },
    {
      id: "3",
      guestName: "Robert Johnson",
      contactNo: "+1122334455",
      passportNo: "EF9876543",
      address: "789 Pine Rd, Sydney, Australia",
      photo: "/profile3.jpg",
      guestSource: "Agency",
      bookingId: "BK2023003",
      roomNo: "312",
      checkinDate: "2023-07-10",
      checkoutDate: "2023-07-15",
      nights: 5,
      ratePerNight: 180,
      totalPayment: 900,
      paymentDate: "2023-07-09",
      paymentType: "Bank Transfer",
      receivedAmount: 900,
      dueAmount: 0,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-slate-800 rounded-lg overflow-hidden">
        <thead className="bg-gray-100 dark:bg-slate-700">
          <tr>
            <th className="py-3 px-4 text-left">Guest</th>
            <th className="py-3 px-4 text-left">Contact</th>
            <th className="py-3 px-4 text-left">Room</th>
            <th className="py-3 px-4 text-left">Check-in/out</th>
            <th className="py-3 px-4 text-left">Nights</th>
            <th className="py-3 px-4 text-left">Rate</th>
            <th className="py-3 px-4 text-left">Total</th>
            <th className="py-3 px-4 text-left">Payment</th>
            <th className="py-3 px-4 text-left">Due</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
          {dummyGuests.map((guest) => (
            <tr
              key={guest.id}
              className="hover:bg-gray-50 dark:hover:bg-slate-700/50"
            >
              <td className="py-4 px-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <Image
                      width={1000}
                      height={1000}
                      className="h-10 w-10 rounded-full"
                      src={guest.photo}
                      alt={guest.guestName}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium dark:text-white">
                      {guest.guestName}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      ID: {guest.bookingId}
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="text-sm dark:text-white">{guest.contactNo}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {guest.passportNo}
                </div>
              </td>
              <td className="py-4 px-4 text-sm dark:text-white">
                {guest.roomNo}
              </td>
              <td className="py-4 px-4">
                <div className="text-sm dark:text-white">
                  {guest.checkinDate}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {guest.checkoutDate}
                </div>
              </td>
              <td className="py-4 px-4 text-sm dark:text-white">
                {guest.nights}
              </td>
              <td className="py-4 px-4 text-sm dark:text-white">
                ${guest.ratePerNight}
              </td>
              <td className="py-4 px-4 text-sm dark:text-white">
                ${guest.totalPayment}
              </td>
              <td className="py-4 px-4">
                <div className="text-sm dark:text-white">
                  {guest.paymentType}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Paid: ${guest.receivedAmount}
                </div>
              </td>
              <td className="py-4 px-4">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${
                    guest.dueAmount === 0
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  ${guest.dueAmount}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GuestTable;
