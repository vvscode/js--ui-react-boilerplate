import LoginPage from './component';
import { connect } from 'react-redux';

import { logIn } from '@/redux/auth/operations';

const mapStateToProps = ({ auth: { authorized } }) => ({
  authorized,
});

const mapDispatchToProps = dispatch => ({
  logIn: credentials => dispatch(logIn(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
