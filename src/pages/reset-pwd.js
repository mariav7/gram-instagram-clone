import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';
import { ReactLoader } from '../components';

const ResetPassword = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const isInvalid = emailAddress === '';

  const resetPass = async (event) => {
    event.preventDefault();
    try {
      await firebase
        .auth()
        .sendPasswordResetEmail(emailAddress)
        .then(() => {
          setSubmitting(true);
          setEmailAddress('');
          setError('');
          setValidForm(true);
        });
      setTimeout(() => {
        history.push(ROUTES.LOGIN);
      }, 4000);
    } catch (error) {
      setEmailAddress('');
      switch (error.code) {
        case 'auth/user-not-found':
          setError('This Gram account does not exist, please create an account');
          setSubmitting(false);
          break;
        default:
          setError(error.message);
          setSubmitting(false);
          break;
      }
    }
  };

  useEffect(() => {
    document.title = 'Reset Password - Gram';
  }, []);

  return (
    <article className="flex items-center justify-center h-screen bg-gray-background">
      <section className="bg-white rounded-sm border border-gray-primary max-w-sm text-center flex flex-col items-center justify-center w-96">
        <div className="flex justify-center items-center flex-col w-full bg-white p-4">
          <figure className="mt-5 mb-4">
            {validForm ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="104.000000pt"
                height="97.000000pt"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#10b981"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            ) : (
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="104.000000pt"
                height="97.000000pt"
                viewBox="0 0 104.000000 97.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,97.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path d="M418 954 c-88 -21 -156 -60 -225 -130 -189 -188 -188 -481 1 -670 190 -190 482 -190 672 0 189 189 190 482 1 670-123 124 -284 170 -449 130z m260 -35 c316 -108 409 -514 173 -750 -219 -219 -596 -156 -729 122 -174 365 175 759 556 628z" />
                  <path d="M463 759 c-53 -26 -83 -83 -83 -157 0 -40 -4 -52 -15 -52 -8 0 -24-9 -35 -20 -18 -18 -20 -33 -20 -140 0 -168 -11 -160 220 -160 231 0 220 -8 220 160 0 107 -2 122 -20 140 -11 11 -27 20 -35 20 -11 0 -15 12 -15 52 0 75-30 131 -84 157 -53 26 -80 26 -133 0z m134 -25 c37 -23 54 -60 60 -124 l6-60 -132 0 -131 0 0 38 c0 133 100 207 197 146z m113-224 c17 -17 20 -33 20-120 0 -143 4 -140 -200 -140 -204 0 -200 -3 -200 140 0 143 -4 140 200 140 147 0 162 -2 180 -20z" />
                </g>
              </svg>
            )}
          </figure>
          {!submitting && <h3 className="font-bold mt-5 mb-4">Forgot your password ?</h3>}
          <p className="text-md text-gray-base">
            {!validForm
              ? "Enter your email address and we'll send you a link to get back into your account."
              : 'Please check your mailbox, you will be directed to the login page...'}
          </p>
        </div>

        {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
        {!submitting ? (
          <div className="flex flex-row items-center relative py-5">
            <form onSubmit={resetPass} method="POST">
              <input
                aria-label="Enter your email address"
                type="text"
                placeholder="Email address"
                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                onChange={({ target }) => setEmailAddress(target.value)}
                value={emailAddress}
              />
              <button
                disabled={isInvalid}
                type="submit"
                className={`bg-blue-medium text-white w-full rounded h-8 font-bold
              ${isInvalid && 'opacity-50'}`}
              >
                Reset password
              </button>
            </form>
          </div>
        ) : (
          <div className="mb-5">
            <ReactLoader />
          </div>
        )}

        {!submitting && (
          <div className="flex justify-center items-center flex-col w-full bg-white p-4">
            <p className="text-sm">OR</p>
          </div>
        )}

        {!submitting && (
          <div className="flex justify-center items-center flex-col w-full bg-white p-4">
            <p className="text-sm">
              <Link to={ROUTES.SIGN_UP} className="text-blue-medium">
                Create New Account
              </Link>
            </p>
          </div>
        )}

        {!submitting && (
          <div className="flex justify-center items-center flex-col w-full bg-gray-background p-4 rounded border border-gray-primary">
            <p className="text-sm">
              <Link to={ROUTES.LOGIN} className="text-blue-medium">
                Back to Login Page
              </Link>
            </p>
          </div>
        )}
      </section>
    </article>
  );
};

export default ResetPassword;
