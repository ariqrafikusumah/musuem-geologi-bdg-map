// Doucmentation Material-Tailwind
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { authorsTableData } from "@/data";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FosilTable } from ".";
import { PencilSquareIcon, PrinterIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import batuanEdit from "./batuanedit";

// const deleteData = async () => {
//   try {
//       const response = await axios.delete(`http://sbc-sebatcabut.herokuapp.com/batuan/${id}	
//       `, {
//           headers: {
//               'Content-Type': 'application/json',
//           },
//       });
//       console.log(response);
//   } catch (error) {
//       console.error(error);
//   }
// };
const handleDelete = async (id) => {
  try {
      const response = await axios.delete(`http://sbc-sebatcabut.herokuapp.com/batuan/${id}`, {
          headers: {
              'Content-Type': 'application/json',
          },
      });
      console.log(response);
  } catch (error) {
      console.error(error);
  }
};


export function Tables() {
  const url = "https://sbc-sebatcabut.herokuapp.com";
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    setisLoading(true);
    // URL Ganti dengan alamat github atau API atau URL API 
    // Method @{get, post, put, patch, delete}
    axios
      .get( url + '/batuans')
      .then((response) => {
        setdata(response.data.data.data);
        console.log(response.data.data.data); // Menampilkan console log
        setisLoading(false);
      })
      .catch((err) => {
        // Jika Gagal
        console.log(err);
        setisError(true);
        setisLoading(false);
      });
  }, []);


  if (isLoading)
    return (
      <div className="grid place-items-center" role="status">
        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    )
  else if (data && !isError)


    return (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        {/* <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Batuan -
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto" >
            <thead>
              <tr>
                {["NO", "NO REGISTER", "NO INVENTARIS", "NUP BMN", "NAMA KOLEKSI", "KODE KOLEKSI AWAL", "LOKASI PENYIMPANAN", "KETERANGAN", "", ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {authorsTableData.map(
                ({ no, img, name, email, job, online, date }, key) => {
                  const className = `py - 3 px - 5 ${
          key === authorsTableData.length - 1
          ? ""
          : "border-b border-blue-gray-50"
        } `;
                  return (
                    <tr key={name}>
                      <td className={className}>
                        <Typography
                          variant="3"
                        >
                          {no}
                        </Typography>
                      </td>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={name} size="sm" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {job[0]}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {job[1]}
                        </Typography>
                      </td>
                      <td className={className}>

                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {date}
                        </Typography>
                      </td>
                      <td className={className}>

                      </td>
                      <td className={className}>

                      </td>
                      <td className={className}>
                        <Button variant="outlined" color="red">Cetak</Button>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          Edit
                        </Typography>
                      </td>
                      <td className={className}>
                        <Checkbox />
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card> */}

        <Card>
          <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Batuan - 6.06.01.05.005
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-3 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["NO", "NO REGISTER", "NO INVENTARIS", "NUP BMN", "NAMA KOLEKSI", "KODE KOLEKSI AWAL", "LOKASI PENYIMPANAN", "KETERANGAN", "Cetak", "edit", ""].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>

              </thead>
              <tbody>

                {data &&
                  data.map((item) => (
                    <tr className="border-b border-blue-gray-50 py-3 px-5 text-left" key={item}>{item.id.toUpperCase()}
                      <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                        <Typography
                          variant="3"
                        >
                          {item.no_register}
                        </Typography>
                      </td>
                      <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                        {item.no_inventaris}
                      </td>
                      <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                        {item.kode_bmn}
                      </td>
                      <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                        {item.nama_koleksi}
                      </td>
                      <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                      </td>
                      <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                        {item.lokasi_simpan}
                      </td>
                      <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                        {item.keterangan}
                      </td>
                      <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                        <Button className="flex gap-2"><PrinterIcon className="w-5" /> Cetak</Button>
                      </td>
                      <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                       <a href={`batuanedit`} className="flex gap-2 bg-blue-gray-900"><PencilSquareIcon className="w-5" />Edit</a>
                      </td>
                      <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                        <Button className="flex gap-2 bg-red-900" onClick={()=> handleDelete(item.id) }><TrashIcon className="w-5" />Delete</Button>
                      </td>
                      <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                        <Checkbox />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </CardBody>
        </Card>

        <FosilTable />

      </div>
    );
}

export default Tables;
