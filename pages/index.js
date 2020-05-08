import ProductList from "../components/ProductList"
import '../assets/index.scss'

const Index = (props) => {
    return (
        <div className="app">
            <Head>
                <title>Beautiful, high quality carpets | CarpetCity</title>
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.0-beta.3/default/snipcart.css" />
            </Head>
            <main className="main">
                <ProductList products={props.products} />
            </main>
            <script src="https://cdn.snipcart.com/themes/v3.0.0-beta.4/default/snipcart.js"></script>
            <div hidden id="snipcart" data-api-key="MjFjYzUwOTMtNDdmNC00NGNlLWIzMGItZTE2N2NkNjIyMGEzNjM3MjQ1MjM5OTQxNzkwMTkz"></div>
            <script src="https://cdn.snipcart.com/themes/v3.0.12/default/snipcart.js"></script>
        </div>
    )
}
Index.getInitialProps = async () => {
    return {
        products: [
            { id: "nextjs-jers_shirt1", name: "JERS in Green", price: 25.0, image: "static/jers-male4.jpg", description: "Fix your life with this fresh JERS shirt"},
            { id: "nextjs-jers_crop1", name: "JERS Crop", price: 45.0, image: "static/JERScrop.jpg", description: "Fix your girl's life with this fresh JERS crop top"},
            { id: "nextjs-jers_shirt2", name: "JERS Classic", price: 35.0, image: "static/male3.jpg", description: "This classic styled JERS will fix your life"}
        ]
    }
}

export default Index;