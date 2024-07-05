"use client";

import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Machine {
  id: string;
  name: string;
  imageUrl: string;
}

const InstructorList = () => {
  const [machines, setMachines] = useState<Machine[]>([]);
  useEffect(() => {
    const getMachines = async () => {
      const res = await axios.get("/api/get/machines");
      console.log("res", res);
      const machinesData = await res.data.getMachineProducts;
      setMachines(machinesData);
    };
    getMachines();
  }, []);
  if (machines) {
    console.log(machines);
  }
  return (
    <>
      <div className="flex justify-end mx-6">
        <Link href="/admin/machines/upload">
          <h2 className="font-medium shadow-md p-2 rounded-md cursor-pointer hover:scale-105">
            Upload machine products
          </h2>
        </Link>
      </div>
      <div className="m-3 border">
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Product Name</Th>
                <Th></Th>
                <Th>Remove</Th>
              </Tr>
            </Thead>
            <Tbody>
              {machines &&
                machines.map((machine, i) => (
                  <>
                    <Tr key={machine.id}>
                      <Th>{machine.name}</Th>
                      <Th>{machine.id}</Th>
                      <Th>
                        <button
                          onClick={async () => {
                            const res = await axios.delete(
                              `/api/remove/machine?id=${machine.id}`
                            );
                            const data = await res.data;
                            console.log(data);
                            if (
                              data.message === "Product deleted successfully"
                            ) {
                              window.location.reload();
                            }
                          }}
                          className="rounded-md bg-red-500 px-2 py-1 text-white"
                        >
                          Remove
                        </button>
                      </Th>
                    </Tr>
                  </>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default InstructorList;
