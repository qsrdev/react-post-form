import { useState } from "react";

function App() {
  const startingData = {
    author: "",
    title: "",
    body: "",
    public: false,
  };

  const [formData, setFormFata] = useState(startingData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFata({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="card my-3">
              <div className="card-body">
                <h3 className="text-center">Aggiungi un post al blog</h3>
                <form action="">
                  <div className="mb-3">
                    <label for="author" className="form-label">
                      Autore
                    </label>
                    <input type="text" className="form-control " id="author" aria-describedby="author" placeholder="Matteo..." />
                  </div>
                  <div className="mb-3">
                    <label for="title" className="form-label">
                      Titolo
                    </label>
                    <input type="text" className="form-control" id="title" aria-describedby="title" placeholder="Ho bisogno di 4 mozzarelle..." />
                    <div id="title" className="form-text">
                      Inserisci il titolo del post
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="body" className="form-label">
                      Inserisci il testo del post
                    </label>
                    <textarea className="form-control" id="body" rows="3" placeholder="specifica la tua richiesta..."></textarea>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="public" />
                    <label className="form-check-label" for="public">
                      Spuntare per pubblicare il post
                    </label>
                  </div>
                  <button type="submit" class="btn btn-success">
                    Pubblica
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
