import { Link } from 'react-router-dom';



function Login() {
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="flex flex-col  w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">


                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                <img className="w-8 h-8 mr-2" src="https://cdn.builder.io/api/v1/image/assets/TEMP/68fb89b028c8bfd5a16c190119e2a88155f98d3ce54849d9273ffbef93869878?apiKey=dadde3c8bb91485ea6a1326748697be7&" alt="logo" />
                                <h1 className="text-3xl font-bold">IdeaHub</h1>
                            </a>
                            <div>

                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Log in to your Account
                                </h1>
                                <p className="text-gray-500 dark:text-gray-400 my-1">Welcome back! Select a method to login</p>
                            </div>




                            <form className="space-y-4 md:space-y-6" action="#">

                                <div className="flex items-center justify-center">


                                    {/* The toggle button is here */}



                                    <label className="inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer"/>
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
                                    </label>

                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>


                                {/* Logic for toggle */}
                                <Link to="/dashboardInnovator">

                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                </Link>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? 
                                    <div className="button" ><Link to="/signup"><a href="" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a></Link></div>
                                    
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login





// import React from "react";
// import { useCountries } from "use-react-countries";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Input,
//   Button,
//   Typography,
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   Tab,
//   TabPanel,
//   Select,
//   Option,
// } from "@material-tailwind/react";
// import {
//   BanknotesIcon,
//   CreditCardIcon,
//   LockClosedIcon,
// } from "@heroicons/react/24/solid";
 
// function formatCardNumber(value: string) {
//   const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
//   const matches = val.match(/\d{4,16}/g);
//   const match = (matches && matches[0]) || "";
//   const parts = [];
 
//   for (let i = 0, len = match.length; i < len; i += 4) {
//     parts.push(match.substring(i, i + 4));
//   }
 
//   if (parts.length) {
//     return parts.join(" ");
//   } else {
//     return value;
//   }
// }
 
// function formatExpires(value: string) {
//   return value
//     .replace(/[^0-9]/g, "")
//     .replace(/^([2-9])$/g, "0$1")
//     .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
//     .replace(/^0{1,}/g, "0")
//     .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
// }
 
// export default function CheckoutForm() {
//   const { countries } = useCountries();
//   const [type, setType] = React.useState("card");
//   const [cardNumber, setCardNumber] = React.useState("");
//   const [cardExpires, setCardExpires] = React.useState("");
 
//   return (
//     <Card className="w-full max-w-[24rem]">
//       <CardHeader
//         color="gray"
//         floated={false}
//         shadow={false}
//         className="m-0 grid place-items-center px-4 py-8 text-center"
//       >
//         <div className="mb-4 h-20 p-6 text-white">
//           {type === "card" ? (
//             <CreditCardIcon className="h-10 w-10 text-white" />
//           ) : (
//             <img alt="paypal " className="w-14 " src="https://docs.material-tailwind.com/icons/paypall.png" />
//           )}
//         </div>
//         <Typography variant="h5" color="white">
//           Material Tailwind PRO
//         </Typography>
//       </CardHeader>
//       <CardBody>
//         <Tabs value={type} className="overflow-visible">
//           <TabsHeader className="relative z-0 ">
//             <Tab value="card" onClick={() => setType("card")}>
//               Pay with Card
//             </Tab>
//             <Tab value="paypal" onClick={() => setType("paypal")}>
//               Pay with PayPal
//             </Tab>
//           </TabsHeader>
//           <TabsBody
//             className="!overflow-x-hidden !overflow-y-visible"
//             animate={{
//               initial: {
//                 x: type === "card" ? 400 : -400,
//               },
//               mount: {
//                 x: 0,
//               },
//               unmount: {
//                 x: type === "card" ? 400 : -400,
//               },
//             }}
//           >
//             <TabPanel value="card" className="p-0">
//               <form className="mt-12 flex flex-col gap-4">
//                 <div>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="mb-2 font-medium"
//                   >
//                     Your Email
//                   </Typography>
//                   <Input
//                     type="email"
//                     placeholder="name@mail.com"
//                     className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//                     labelProps={{
//                       className: "before:content-none after:content-none",
//                     }}
//                   />
//                 </div>
 
//                 <div className="my-3">
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="mb-2 font-medium "
//                   >
//                     Card Details
//                   </Typography>
 
//                   <Input
//                     maxLength={19}
//                     value={formatCardNumber(cardNumber)}
//                     onChange={(event) => setCardNumber(event.target.value)}
//                     icon={
//                       <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
//                     }
//                     placeholder="0000 0000 0000 0000"
//                     className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//                     labelProps={{
//                       className: "before:content-none after:content-none",
//                     }}
//                   />
//                   <div className="my-4 flex items-center gap-4">
//                     <div>
//                       <Typography
//                         variant="small"
//                         color="blue-gray"
//                         className="mb-2 font-medium"
//                       >
//                         Expires
//                       </Typography>
//                       <Input
//                         maxLength={5}
//                         value={formatExpires(cardExpires)}
//                         onChange={(event) => setCardExpires(event.target.value)}
//                         containerProps={{ className: "min-w-[72px]" }}
//                         placeholder="00/00"
//                         className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//                         labelProps={{
//                           className: "before:content-none after:content-none",
//                         }}
//                       />
//                     </div>
//                     <div>
//                       <Typography
//                         variant="small"
//                         color="blue-gray"
//                         className="mb-2 font-medium"
//                       >
//                         CVC
//                       </Typography>
//                       <Input
//                         maxLength={4}
//                         containerProps={{ className: "min-w-[72px]" }}
//                         placeholder="000"
//                         className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//                         labelProps={{
//                           className: "before:content-none after:content-none",
//                         }}
//                       />
//                     </div>
//                   </div>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="mb-2 font-medium"
//                   >
//                     Holder Name
//                   </Typography>
//                   <Input
//                     placeholder="name@mail.com"
//                     className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//                     labelProps={{
//                       className: "before:content-none after:content-none",
//                     }}
//                   />
//                 </div>
//                 <Button size="lg">Pay Now</Button>
//                 <Typography
//                   variant="small"
//                   color="gray"
//                   className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
//                 >
//                   <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
//                   secure and encrypted
//                 </Typography>
//               </form>
//             </TabPanel>
//             <TabPanel value="paypal" className="p-0">
//               <form className="mt-12 flex flex-col gap-4">
//                 <div>
//                   <Typography
//                     variant="paragraph"
//                     color="blue-gray"
//                     className="mb-4 font-medium"
//                   >
//                     Personal Details
//                   </Typography>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="mb-2 font-medium"
//                   >
//                     Your Email
//                   </Typography>
//                   <Input
//                     type="email"
//                     placeholder="name@mail.com"
//                     className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//                     labelProps={{
//                       className: "before:content-none after:content-none",
//                     }}
//                   />
//                 </div>
 
//                 <div className="my-6">
//                   <Typography
//                     variant="paragraph"
//                     color="blue-gray"
//                     className="mb-4 font-medium"
//                   >
//                     Billing Address
//                   </Typography>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="mb-2 font-medium"
//                   >
//                     Country
//                   </Typography>
//                   <Select
//                     placeholder="USA"
//                     className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//                     labelProps={{
//                       className: "before:content-none after:content-none",
//                     }}
//                     menuProps={{ className: "h-48" }}
//                   >
//                     {countries.map(({ name, flags }: any) => (
//                       <Option key={name} value={name}>
//                         <div className="flex items-center gap-x-2">
//                           <img
//                             src={flags.svg}
//                             alt={name}
//                             className="h-4 w-4 rounded-full object-cover"
//                           />
//                           {name}
//                         </div>
//                       </Option>
//                     ))}
//                   </Select>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="mt-4 -mb-2 font-medium"
//                   >
//                     Postal Code
//                   </Typography>
//                   <Input
//                     placeholder="0000"
//                     className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//                     labelProps={{
//                       className: "before:content-none after:content-none",
//                     }}
//                     containerProps={{ className: "mt-4" }}
//                   />
//                 </div>
//                 <Button size="lg">pay with paypal</Button>
//                 <Typography
//                   variant="small"
//                   color="gray"
//                   className="flex items-center justify-center gap-2 font-medium opacity-60"
//                 >
//                   <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
//                   secure and encrypted
//                 </Typography>
//               </form>
//             </TabPanel>
//           </TabsBody>
//         </Tabs>
//       </CardBody>
//     </Card>
//   );
// }