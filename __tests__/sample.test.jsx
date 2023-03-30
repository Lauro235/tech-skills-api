
import { render, screen, fireEvent} from '@testing-library/react'
import user from '@testing-library/user-event';
import Home from '@/app/page'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Profile/i,
    })

    expect(heading).toBeInTheDocument()
  })
})