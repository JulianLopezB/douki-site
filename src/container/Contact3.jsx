import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form, Field } from 'formik';
import { TextField, Button } from '@material-ui/core';
import NavigationBar from "../components/NavigationBar";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(4),
    },
    form: {
      width: '70%',
      maxWidth: 500,
      marginBottom: theme.spacing(4),
    },
    field: {
      marginBottom: theme.spacing(2),
    },
    submitButton: {
      marginTop: theme.spacing(2),
    },
    sectionTitle: {
      marginBottom: theme.spacing(2),
    },
  }));
  

const Contact: React.FC = ({children}) => {
  const classes = useStyles();
  const handleSubmit = (values: FormValues) => {
    // send form values to backend or email
  };
  return (

    <div 
    style={{
    'top': "0px",
    'position': "sticky",
    'width': "100%",
    'lg-height': "96px",
    // 'sm-height': "150px",
    'z-index':'10'
    }}
    className="bg-gray-50"
    >
    <NavigationBar>
      { children }
    {/* <p className='text-gray text-left text-1xl  mb-5'> */}

    </NavigationBar>
    <div className="flex md:flex items-center py-10 px-6">
    <div className='max-w-md md:max-w-md mx-auto w-full'>
    {/* <div className={classes.root}> */}
        {/* <Typography 
        variant="h4" 
        className={classes.sectionTitle}
        >
          Feature Request Form
        </Typography> */}
        <h1 
        className="text-gray text-left text-2xl font-bold mb-3 py-0"
        >
          Feature Request Form
        </h1>
        {/* <Typography variant="body1">
          Let us know what feature you would like to see on our platform. Your
          feedback is valuable to us and helps us improve the Dokuso shopping
          experience.
        </Typography> */}
        <p className='text-gray text-left text-1xl  mb-5'>
          Let us know what feature you would like to see on our platform. Your
          feedback is valuable to us and helps us improve the Dokuso shopping
          experience.
        </p>
        <div className={classes.form}>
          <Formik
            initialValues={{ name: '', email: '', featureRequest: '' }}
            onSubmit={handleSubmit}
          >
            {({ isValid, isSubmitting }) => (
              <Form>
                <Field
                  name="name"
                  label="Name"
                  component={TextField}
                  required
                  fullWidth
                  className={classes.field}
                />
                <Field
                  name="email"
                  label="Email"
                  type="email"
                  component={TextField}
                  required
                  fullWidth
                  className={classes.field}
                />
                <Field
                  name="featureRequest"
                  label="Feature Request:"
                  component={TextField}
                  required
                  multiline
                  rows={4}
                  fullWidth
                  className={classes.field}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!isValid || isSubmitting}
                  fullWidth
                  className={classes.submitButton}
                >
                  Submit Request
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        {/* <Typography variant="h4" className={classes.sectionTitle}>
          Join Waiting List
        </Typography> */}
        <h1 
        className="text-gray text-left text-2xl font-bold mb-3 py-0"
        >
          Join Waiting List
        </h1>
        {/* <Typography variant="body1">
          Want to be the first to try out new features on our platform? Join our
          waiting list to be notified when new features are released.
        </Typography> */}
        <p className='text-gray text-left text-1xl  mb-5'>
        Want to be the first to try out new features on our platform? Join our
          waiting list to be notified when new features are released.
        </p>
        <div className={classes.form}>
        <Button variant="contained" color="primary" fullWidth>
          Join Waiting List
        </Button>
      </div>
      </div>
    {/* </div> */}
      </div>
    </div>
  );
};


export default Contact;
