//este sera el componente donde se trabajara los elementos de formulario

//importamos las alertas de notificaciones para un success
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
//importamos la libreria de react-hook-form para trabajat con los datos del formulario
import { useForm } from 'react-hook-form'

const Form = () => {
    //desestructuramos los datos que necesitasmos
    const { handleSubmit, register, reset, formState: { errors }, watch, setValue } = useForm();

    const onSubmit = handleSubmit((data) => {
        //mediante el trycatch cachamos los errores o si todo esta bien
        try {
            console.log(data)
            reset()
            toast.success('Fine')
        } catch (error) {
            console.log(error)
        }
    })
  return (
    <form onSubmit={onSubmit} className="form-control mt-3" >
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingName"
          placeholder="User Name"
          name="userName"
          {
            ...register('userName', {
                required: {
                    value: true,
                    message: 'Please enter your name'
                },
                minLength:{
                    value: 10,
                    message: 'Please enter a more than 10 characters'
                },
                maxLength: {
                    value: 50,
                    message: 'Please enter at least 50 characters'
                }
            })
          }
        />
        <label htmlFor="floatingName">Name</label>
        <p className='text-danger text-center'>{ errors?.userName?.message }</p>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          name="email"
          {
            ...register('email', {
                required: {
                    value: true,
                    message: 'Please enter your email'
                }
            })
          }
        />
        <label htmlFor="floatingInput">Email address</label>
        <p className='text-danger text-center'>{ errors?.email?.message }</p>
      </div>

      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          name="password"
          {
            ...register('password', {
                required: {
                    value: true,
                    message: 'Please enter your password'
                },
                minLength: {
                    value: 5,
                    message: 'Please enter more than 5 characters'
                },
                maxLength: {
                    value: 55,
                    message: 'Please enter less than 55 characters'
                },
                pattern: {
                    value: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]$/],
                    message: 'Please add Minimum 5 characters, maximum 20 characters, at least one lowercase letter, at least one uppercase letter, at least one number.'
                }
            })
          }
        />
        <label htmlFor="floatingPassword">Password</label>
        <p className='text-danger text-center'>{ errors?.password?.message }</p>
      </div>

      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingRepitPassword"
          placeholder="Password"
          name="RepitPassword"
          {
            ...register('RepitPassword', {
                required: {
                    value: true,
                    message: 'Please enter your Password'
                },
                validate: value => value === watch("password") || "That password not valid"
            })
          }
        />
        <label htmlFor="floatingRepitPassword">Repit Password</label>
        <p className='text-danger text-center'>{ errors?.RepitPassword?.message }</p>
      </div>

      <div className="form-floating mb-3">
        <select className="form-select" name='select'
        {
            ...register('select', {
                required: {
                    value: true,
                    message: 'Please select a option'
                },
                //validate: (value) => value === watch('password') || <p>That password not valid</p>
            })
          }>
          <option value={""}>Open this select menu</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="C++">C++</option>
        </select>
        <p className='text-danger text-center'>{ errors?.select?.message }</p>
      </div>

      <div className="form-floating mb-3">
        <input type='date' className='form-control' name='date' 
            {
            ...register('date', {
                required: {
                    value: true,
                    message: 'Please enter your date'
                }
            })
          }
        />
        <p className='text-danger text-center'>{ errors?.date?.message }</p>
      </div>
      <div className='form-floating mb-3'>
        <input type='file'  className='form-control' 
        onChange={(e)=> { 
            setValue('foto', e.target.files[0].name)
        }}
        />
      </div>

      <div className="form-floating mb-3">
        <div className="form-check">
          <input
            className="form-check-input border-primary"
            type="checkbox"
            name='check'
            id="flexCheckDefault"
            {
                ...register('check', {
                    required: {
                        value: true,
                        message: 'Check is required'
                    }
                })
            }
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Accept terms
          </label>
        <p className='text-danger text-center'>{ errors?.check?.message }</p>
        </div>
      </div>

      <div className="d-flex justify-content-center align-content-center align-items-center">
        <button className="btn btn-success mt-3">Accept</button>
      </div>
      <ToastContainer autoClose={2000}/>
    </form>
  );
};

export default Form;
