import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, useWindowDimensions } from 'react-native';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={styles.navBar}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://example.com/your-logo.png' }} // Replace with your logo URL
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>Australian Sports Camps</Text>
      </View>

      {isMobile ? (
        // Show hamburger menu on mobile
        <TouchableOpacity style={styles.hamburgerIcon} onPress={() => setMenuOpen(!menuOpen)}>
          <Text style={styles.hamburgerText}>☰</Text>
        </TouchableOpacity>
      ) : (
        // Show menu items on larger screens
        <View style={styles.menuContainer}>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Sports</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Cities</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Memberships</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Resources</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Blogs</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Contact</Text>
          </TouchableOpacity>
          {/* Buttons */}
          <TouchableOpacity style={styles.getStartedButton}>
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.cartIcon}>🛒</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Dropdown Menu for Mobile */}
      {isMobile && menuOpen && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity onPress={() => setMenuOpen(false)}>
            <Text style={styles.dropdownMenuItem}>Sports</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMenuOpen(false)}>
            <Text style={styles.dropdownMenuItem}>Cities</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMenuOpen(false)}>
            <Text style={styles.dropdownMenuItem}>Memberships</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMenuOpen(false)}>
            <Text style={styles.dropdownMenuItem}>Resources</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMenuOpen(false)}>
            <Text style={styles.dropdownMenuItem}>Blogs</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMenuOpen(false)}>
            <Text style={styles.dropdownMenuItem}>Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMenuOpen(false)}>
            <Text style={styles.dropdownMenuItem}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMenuOpen(false)} style={styles.getStartedButton}>
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMenuOpen(false)} style={styles.signInButton}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMenuOpen(false)}>
            <Text style={styles.cartIcon}>🛒</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  logoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  menuItem: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  getStartedButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 10,
  },
  getStartedText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  signInButton: {
    marginRight: 10,
  },
  signInText: {
    color: '#333',
    fontWeight: 'bold',
  },
  cartIcon: {
    fontSize: 18,
    color: '#333',
  },
  hamburgerIcon: {
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 5,
  },
  hamburgerText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dropdownMenu: {
    position: 'absolute',
    top: 60, // Adjust this to align with your navbar height
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    zIndex: 1,
    paddingVertical: 10,
  },
  dropdownMenuItem: {
    padding: 15,
    fontSize: 14,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default NavBar;
