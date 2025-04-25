import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names with Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a date string to a readable format
 */
export function formatDate(dateString: string | Date): string {
  const date = typeof dateString === 'string' 
    ? new Date(dateString) 
    : dateString
    
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date)
}

/**
 * Get short month name from date string
 */
export function getShortMonth(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleString('default', { month: 'short' })
}

/**
 * Organize GitHub contribution data into a calendar format
 */
export function formatGitHubCalendarData(days: Array<{count: number; date: string; weekday: number}>) {
  // Group days by week
  const weeks: Array<Array<{count: number; date: string; weekday: number}>> = []
  let currentWeek: Array<{count: number; date: string; weekday: number}> = []
  
  // Initialize with empty days for the first week if needed
  const firstDay = days[0]
  if (firstDay && firstDay.weekday > 0) {
    for (let i = 0; i < firstDay.weekday; i++) {
      currentWeek.push({ count: 0, date: '', weekday: i })
    }
  }
  
  // Organize by weeks
  days.forEach(day => {
    currentWeek.push(day)
    
    if (day.weekday === 6) {
      weeks.push([...currentWeek])
      currentWeek = []
    }
  })
  
  // Add the last week if it's not complete
  if (currentWeek.length > 0) {
    weeks.push([...currentWeek])
  }
  
  return weeks
}

/**
 * Get GitHub contribution level class based on count
 */
export function getContributionLevelClass(count: number): string {
  if (count === 0) return "bg-[#161b22] border border-[#161b22] dark:bg-[#161b22]"
  if (count <= 3) return "bg-[#0e4429] border border-[#0e4429] dark:bg-[#0e4429]"
  if (count <= 6) return "bg-[#006d32] border border-[#006d32] dark:bg-[#006d32]"
  if (count <= 9) return "bg-[#26a641] border border-[#26a641] dark:bg-[#26a641]"
  return "bg-[#39d353] border border-[#39d353] dark:bg-[#39d353]"
}

/**
 * Get months for GitHub contribution calendar
 * Returns an array of month names with their starting column position
 */
export function getCalendarMonths(days: Array<{count: number; date: string; weekday: number}>) {
  if (!days || days.length === 0) return []
  
  const months: Array<{name: string; position: number}> = []
  let currentMonth = ''
  let column = 0
  
  days.forEach(day => {
    if (!day.date) return
    
    const month = day.date.substring(5, 7) // Get month from YYYY-MM-DD
    if (month !== currentMonth) {
      currentMonth = month
      const monthName = new Date(day.date).toLocaleString('default', { month: 'short' })
      months.push({ name: monthName, position: column })
    }
    
    if (day.weekday === 6) {
      column++
    }
  })
  
  return months
}

/**
 * Smooth scroll to an element on the page
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId)
  if (element) {
    const navbarOffset = 80 // Account for fixed navbar
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    
    window.scrollTo({
      top: elementPosition - navbarOffset,
      behavior: 'smooth'
    })
  }
}

/**
 * Delay execution for a given amount of time
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Truncate text to a specific length
 */
export function truncateText(text: string, maxLength: number = 100): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

/**
 * Generate a random ID
 */
export function generateId(length: number = 8): string {
  return Math.random().toString(36).substring(2, length + 2)
} 