# Frontend Assessment — E-Commerce Cart

## Overview
Implement shopping cart functionality for an e-commerce site. The UI is already built - you need to add the logic.

## Tech Stack
- React 18 + Vite
- React Router v6
- React Context API (required for state)
- Jest + React Testing Library

## Time Limit: 2-3 hours

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development:**
   ```bash
   npm run dev
   ```

3. **Run tests:**
   ```bash
   npm test
   ```

## What You Need to Implement

The UI components are complete but only show static data. You need to:

### 1. Cart State Management (Primary Task)
Implement `src/context/CartContext.jsx`:
- Add/update/remove cart items
- Calculate totals and quantities
- Manage stock limits

### 2. Search & Sort
In `src/components/Catalog.jsx`:
- Filter products by search term (case-insensitive)
- Sort by price (ascending/descending)

### 3. Component Integration
Wire up context functions in:
- `ProductCard.jsx` - Add to cart, quantity controls
- `Cart.jsx` - Cart display, removal, checkout
- `Navbar.jsx` - Cart badge count

## Key Requirements

### ✅ Must Implement:
- Search filters products by title as you type
- Sort dropdown works (none/price-asc/price-desc)
- "Add to Cart" adds item with quantity 1
- +/- buttons increment/decrement quantities
- Cart shows items, quantities, prices, and subtotal
- "Remove" button removes items from cart
- Cart badge shows total item count
- "Buy Now" navigates to thank-you page and clears cart
- Out of stock items show "Out of Stock" label
- Increment buttons disable when reaching stock limit

### ❌ Critical Constraints:
- **DO NOT** modify any `data-testid` attributes
- **DO NOT** change `src/data/products.json`
- **DO NOT** modify component structure or CSS
- **MUST** use React Context API for state management

## File Structure
```
src/
├── components/          # Pre-built UI (wire up with context)
│   ├── Catalog.jsx     # Search/sort + product grid
│   ├── ProductCard.jsx # Individual product + cart controls
│   ├── Cart.jsx        # Shopping cart sidebar
│   └── Navbar.jsx      # Header with cart badge
├── context/
│   └── CartContext.jsx # 🎯 YOUR MAIN TASK
├── data/
│   └── products.json   # Mock data (don't modify)
├── pages/
│   ├── HomePage.jsx    # Layout
│   └── ThankYouPage.jsx # Success page
└── __tests__/
    └── public/         # Test cases (all must pass)
```

## Test Cases
Your implementation must pass all 5 test suites:

1. **Search Functionality** - Filter products by name
2. **Sort Functionality** - Price sorting works correctly  
3. **Add to Cart** - Basic cart operations and badge updates
4. **Out of Stock** - Proper handling of zero-stock items
5. **Buy Now Flow** - Complete purchase journey

**Note:** Additional hidden test cases will validate edge cases and advanced scenarios. Focus on making the visible tests pass and handling common e-commerce interactions properly.

## Getting Started Tips

1. **Examine the existing code** to understand the structure
2. **Look at the test files** to understand expected behavior
3. **Start with CartContext.jsx** - this is your main implementation
4. **Run tests frequently** to validate your progress
5. **Use console.log** to debug state changes

## Data Structure Reference

Products have this structure:
```javascript
{
  "id": "p1",
  "title": "Acme Wireless Mouse", 
  "price": 799,  // Price in cents
  "stock": 5,
  "image": "/images/mouse.jpg",
  "category": "accessories"
}
```

Cart items should include:
```javascript
{
  "id": "p1",
  "title": "Acme Wireless Mouse",
  "price": 799,
  "stock": 5,
  "quantity": 2  // Add this field
}
```
# Submitting Your Solution

Open a pull request from `dev` into `main` once you are ready to submit. Do not merge the pull request. Here is a step-by-step guide on how to create a pull request.

## Evaluation
- ✅ All tests pass
- ✅ Clean, readable code
- ✅ Proper React patterns
- ✅ No breaking changes to existing structure

## Bonus Points (Optional) 🌟

If you implement additional features or handle edge cases beyond the basic requirements, **document them in this README**. Add a section called "Additional Implementations" that describes:

- **Extra features** you added (e.g., loading states, error handling, animations)
- **Edge cases** you handled (e.g., rapid clicking prevention, input validation)
- **Performance optimizations** you implemented
- **Accessibility improvements** you made
- **Code organization** enhancements

**Example:**
```markdown
## Additional Implementations

### Edge Cases Handled:
- Prevented rapid button clicking from causing race conditions
- Added debounced search to avoid excessive filtering
- Graceful handling of missing product images

### Extra Features:
- Loading spinners during cart operations
- Toast notifications for cart actions
- Keyboard navigation support
```

**Note:** Bonus implementations should enhance the user experience without breaking existing functionality or tests.

**Good luck!** 🚀
