import { useState } from "react";

const useToggle = (initialStatus: boolean) => {
    const [status, setStatus] = useState<boolean>(initialStatus);

    const toggleStatus = (): void => setStatus((prev: boolean) => !prev);

    return { status, toggleStatus };
};

export default useToggle;
