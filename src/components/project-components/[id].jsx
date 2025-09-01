
export const [id] = () => {
    const [projectID, setProjectID] = useState()
    const [projectClicked, setProjectClicked] = useState<Boolean>(true)
    
    const handleOnClick = () => {
        setProjectClicked((prev) => !prev);
    };

    return <></>;
}