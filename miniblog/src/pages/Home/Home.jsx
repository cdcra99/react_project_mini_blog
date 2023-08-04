//CSS
import styles from "./Home.module.css";

// Hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetChDocuments";

// Components
import PostDetail from "../../components/PostDetail";

const Home = () => {
  
  const [query, setQuery] = useState("");
  const {documents: posts, loading} = useFetchDocuments("posts");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(query){
      return navigate(`/search?q=${query}`);
    }
  };
  
  return (
    <div className={styles.home}>
        <h1>Veja as nossos post mais recentes</h1>
        <form onSubmit={handleSubmit} className={styles.search_form}>
          <input 
            type="text" 
            placeholder="Ou busque por tags..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-dark">Pesquisar</button>
        </form>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => (
          <PostDetail post={post} key={post.id} />
        ))}
        {posts && posts.lengh === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">Criar primeiro post</Link>
          </div>
        )}
    </div>
  )
}

export default Home