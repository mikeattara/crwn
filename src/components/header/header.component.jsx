import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CartIcon } from '../cart-icon/cart-icon.component';
import { CartDropdown } from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { signOut } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import {
  HeaderContainer,
  NavigationContainer,
  LogoContainer,
  NavigationLink
} from './header.styles';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ currentUser, signOut, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo />
    </LogoContainer>
    <NavigationContainer>
      <NavigationLink to='/shop'>Shop</NavigationLink>
      <NavigationLink to='/contact'>Contact</NavigationLink>
      {
        currentUser === null
          ? <NavigationLink to='/login'>Sign in</NavigationLink>
          : <NavigationLink as='div' onClick={signOut}>Sign out</NavigationLink>
      }
      <CartIcon />
    </NavigationContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
));
