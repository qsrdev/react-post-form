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
          <div className="col-10">
            <div className="card my-3">
              <div className="card-body">
                <h3 className="text-center">Request Form</h3>
                <form action="">
                  <div class="mb-3">
                    <label for="author" class="form-label">
                      Author
                    </label>
                    <input type="text" class="form-control" id="author" aria-describedby="author" placeholder="Matteo..." />
                  </div>
                  <div class="mb-3">
                    <label for="title" class="form-label">
                      Title
                    </label>
                    <input type="text" class="form-control" id="title" aria-describedby="title" placeholder="Ho bisogno di 4 mozzarelle..." />
                    <div id="title" class="form-text">
                      Insert the title of your request
                    </div>
                  </div>
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
