import React from 'react'
import IconSet from "./../components/IconSet"

const Home = () => {
  return (

    <div >
      <header className='container-fluid d-flex align-items-center border-bottom py-2 '>
        <div className='navbar-toggler pe-3'>
          <button className="btn btn-primary rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-controls="collapseExample" aria-expanded="false" aria-label="Toggle navigation">
            <IconSet imageUrl={'./src/assets/icons/icon-menu-outline.svg'} />
          </button>
        </div>
        <div className='flex-fill'>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item active" aria-current="page">Home</li>
            </ol>
          </nav>
          <div className="d-flex align-itens-center">
            <h2 className='m-0 flex-fill'>
              Home
            </h2>
            <div className='actions'>
              <button className='btn btn-light'>
                <IconSet imageUrl={'./src/assets/icons/icon-brand-messenger.svg'} />
              </button>
              <button className='btn btn-light'>
                <IconSet imageUrl={'./src/assets/icons/icon-bell.svg'} />
              </button>

            </div>
          </div>
        </div>
      </header>
      <div className='container-fluid'>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>body text</p>
        <p className="text-body-emphasis">body text emphasis</p>
        <p className="text-muted">body text muted</p>

        <p className="text-body">body text color</p>
        <p className="text-body-secondary">body text secondary color</p>
        <p className="text-body-tertiary">body text tertiary color</p>
        <div className='mb-5'>
          <h3>Buttons and Links</h3>
          <button className="btn btn-primary me-2"><IconSet styleClass={'me-2'} imageUrl={'./src/assets/icons/icon-home-stats.svg'} />Button Primary</button>
          <button className="btn btn-secondary me-2"><IconSet styleClass={'me-2'} imageUrl={'./src/assets/icons/icon-home-stats.svg'} />Button Secondary</button>
          <button className="btn btn-light me-2"><IconSet styleClass={'me-2'} imageUrl={'./src/assets/icons/icon-home-stats.svg'} />Button Light</button>
          <button className="btn btn-link me-2"><IconSet styleClass={'me-2'} imageUrl={'./src/assets/icons/icon-home-stats.svg'} />Button Link</button>
          <a href="#"><IconSet styleClass={'me-2'} imageUrl={'./src/assets/icons/icon-home-stats.svg'} />link</a>
        </div>
        <div className='mb-5'>
          <h3>Forms</h3>
          <form className="row g-3 needs-validation" noValidate>
            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">First name</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                defaultValue="Mark"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">Last name</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                defaultValue="Otto"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustomUsername" className="form-label"
              >Username</label
              >
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">&#64;</span>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <div className="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationCustom03" className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                required
              />
              <div className="invalid-feedback">Please provide a valid city.</div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom04" className="form-label">State</label>
              <select className="form-select" id="validationCustom04" required>
                <option disabled defaultValue>Choose...</option>
                <option>...</option>
              </select>
              <div className="invalid-feedback">Please select a valid state.</div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom05" className="form-label">Zip</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom05"
                required
                disabled
              />
              <div className="invalid-feedback">Please provide a valid zip.</div>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="invalidCheck"
                  required
                />
                <label className="form-check-label" htmlFor="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">You must agree before submitting.</div>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
          </form>
        </div>
        <div className='mb-5'>
          <h3>Nav Tabs</h3>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <ul className="nav nav-underline">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
        <div className='mb-5'>
          <h3>Acordion</h3>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <h3>Table</h3>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='mb-5'>
          <h3>Acordion</h3>
          <div className="btn-group">
            <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <IconSet styleClass={'me-2'} imageUrl={'./src/assets/icons/icon-home-stats.svg'}></IconSet>Dropdown Menu
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
        </div>
        <div className='mb-5'>
          <h3>Background Colors</h3>
          <div className="bg-body-tertiary border p-4">
            <h6>Background Color Tertiary</h6>
            <div className="bg-body-secondary border my-4 p-4">
              <h6>Background Color Secondary</h6>
              <div className="bg-body border my-4 p-4">
                <h6>Background Color</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home