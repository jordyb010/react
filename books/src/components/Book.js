const Book  = ({title, image, author}) => {
    return ( 
     <article>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <img src={image} alt="lang leven de liefde"></img>
     </article>
     );
}
 
export default Book ;