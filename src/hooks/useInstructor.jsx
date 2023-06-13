import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ["isInstructor", user?.email],
        enabled: !loading,
        queryFn: async () => {
            if (user?.email && loading === false) {
                const response = await axiosSecure.get(`/users/instructor/${user?.email}`);
                return response.data.instructor;
            } else {
                return "userNull";
            }
        },
    });
    return [isInstructor, isInstructorLoading];
};
export default useInstructor;