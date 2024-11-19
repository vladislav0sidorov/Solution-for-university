export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="card">
      <div className="card-content">{children}</div>
    </div>
  )
}
