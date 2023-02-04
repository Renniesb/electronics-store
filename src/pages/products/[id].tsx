
import { useRouter } from "next/router";

const ProductPage = () => {
    const router = useRouter();
    const {query: {title, description}} = router;
    return <div><h1>{title}</h1><p>{description}</p></div>
};

export default ProductPage;