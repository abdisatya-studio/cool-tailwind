// FitPulse Main JavaScript
// Using Alpine.js for reactivity

document.addEventListener('alpine:init', () => {
  // Theme toggle state
  Alpine.data('theme', () => ({
    darkMode: JSON.parse(localStorage.getItem('darkMode')) || false,
    toggleTheme() {
      this.darkMode = !this.darkMode;
      localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
      document.documentElement.classList.toggle('dark', this.darkMode);
    },
    init() {
      // Initialize dark mode
      this.darkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
      document.documentElement.classList.toggle('dark', this.darkMode);
    }
  }));

  // Sidebar state
  Alpine.data('sidebar', () => ({
    isOpen: false,
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
    close() {
      this.isOpen = false;
    },
    init() {
      // Close sidebar on mobile when clicking outside
      document.addEventListener('click', (e) => {
        const sidebar = e.target.closest('.drawer');
        if (!sidebar && this.isOpen) {
          this.isOpen = false;
        }
      });
    }
  }));

  // Tab切换状态
  Alpine.data('tabs', () => ({
    activeTab: 'Week',
    setTab(tab) {
      this.activeTab = tab;
      // Add active class to clicked tab and remove from others
      const tabs = document.querySelectorAll('.tabs a');
      tabs.forEach(t => t.classList.remove('tab-active'));
      e?.target?.classList.add('tab-active');
    }
  }));

  // Search functionality
  Alpine.data('search', () => ({
    query: '',
    results: [],
    filterItems(items) {
      if (!this.query) return items;
      return items.filter(item => 
        item.toLowerCase().includes(this.query.toLowerCase())
      );
    }
  }));

  // Checkbox selection
  Alpine.data('selection', () => ({
    selected: [],
    toggleAll(event) {
      const checked = event.target.checked;
      const checkboxes = document.querySelectorAll('.checkbox');
      checkboxes.forEach(cb => cb.checked = checked);
    },
    toggle(id) {
      const index = this.selected.indexOf(id);
      if (index > -1) {
        this.selected.splice(index, 1);
      } else {
        this.selected.push(id);
      }
    }
  }));
});

// Ensure Alpine is available globally
window.Alpine = Alpine;

// Start Alpine
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Alpine !== 'undefined') {
    Alpine.start();
  }
});

// Search filter handlers
document.querySelectorAll('input[type="text"], select').forEach(input => {
  input.addEventListener('input', function() {
    console.log('Filter changed:', this.value);
  });
});

// Button click handlers for demo
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', function(e) {
    // Check if it's a notification bell
    if (this.closest('.header-notifications')) {
      console.log('Notifications clicked');
      // Show dropdown
      const dropdown = this.closest('.dropdown');
      dropdown?.classList.add('show');
    }
    
    // Check if it's a theme toggle
    if (this.id === 'theme-toggle' || this.closest('.toggle')) {
      console.log('Theme toggle clicked');
    }
  });
});

// Mobile sidebar toggle
document.addEventListener('click', function(e) {
  const sidebarToggle = e.target.closest('.drawer-toggle');
  if (sidebarToggle && window.innerWidth < 1024) {
    e.target.closest('.drawer-content').classList.add('drawer-open');
  }
});
