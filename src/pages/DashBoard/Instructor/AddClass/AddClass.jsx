import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const imageHostingToken = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddClass = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [axiosSecure] = useAxiosSecure();

    const { user } = useAuth()
    console.log(user);

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("image", data.image[0]);

        fetch(`https://api.imgbb.com/1/upload?key=${imageHostingToken}`, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    const newClass = {
                        className: data.className,
                        instructorName: data.instructorName,
                        instructorEmail: data.instructorEmail,
                        instructorImage: data.instructorImage,
                        availableSeats: parseFloat(data.availableSeats),
                        image: result.data.display_url,
                        price: parseFloat(data.price),
                        status: "pending",
                        enrolledStudents: 0
                    };
                    console.log(newClass);
                    axiosSecure
                        .post("/classes", newClass)
                        .then((data) => {
                            reset();
                            console.log(data);
                            Swal.fire({
                                icon: 'success',
                                title: 'Class added successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        })
                        .catch((error) => console.log(error));
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className="w-full space-y-4 my-8 bg-slate-400 py-8">
            <h1 className="font-semibold text-5xl text-center mb-8">Add A Class</h1>
            <form className="w-[80%] mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Class Name"
                        {...register("className", { maxLength: 120 })}
                        className="input input-bordered w-full "
                        required
                    />
                    {errors.name?.type === "maxLength" && (
                        <p className="text-red-600" role="alert">
                            Name should be maximum 120 character long
                        </p>
                    )}
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name</span>
                    </label>
                    <input
                        type="text"
                        {...register("instructorName")}
                        defaultValue={user.displayName}
                        className="input input-bordered w-full "
                        required readOnly
                    />
                </div>
                <div className="form-control w-full hidden">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name</span>
                    </label>
                    <input
                        type="text"
                        {...register("instructorImage")}
                        defaultValue={user.photoURL
                        }
                        className="input input-bordered w-full "
                        required readOnly
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email</span>
                    </label>
                    <input
                        type="text"
                        {...register("instructorEmail")}
                        className="input input-bordered w-full "
                        defaultValue={user.email}
                        required readOnly
                    ></input>
                </div>


                <div className="flex justify-between gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input
                            type="number" min={1}
                            {...register("price")}
                            placeholder="Price"
                            className="input input-bordered w-full "
                            required
                        />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seats</span>
                        </label>
                        <input
                            type="number" min={0}
                            {...register("availableSeats")}
                            className="input input-bordered"
                            placeholder="Available Seats"
                            required
                        ></input>
                    </div>
                </div>

                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Image</span>
                    </label>
                    <input
                        type="file"
                        {...register("image")}
                        className="file-input file-input-bordered w-full"
                        required
                    />
                </div>
                <button className="btn btn-info text-white text-lg btn-block mt-4" type="submit">
                    Add Class
                </button>
            </form>
        </div>
    );
};

export default AddClass;