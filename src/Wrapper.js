const NotMachine = () => (
    <React.Fragment>
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
        <p className="text-align-center font--xlarge">
            Are you a UK based?
        </p>
        <p style={{ width: '700px'}}>
            For projects in the UK, we fund work in England, Northern Ireland, Scotland, Wales, the Channel Islands and the Isle of Man. Depending on the initiative, Comic Relief may also welcome proposals from organisations registered outside the UK.
        </p>
        <p style={{ width: '700px'}}>
            The governing documents of an organisation that is not also a registered charity must clearly outline the organisation’s social purpose, demonstrate that any profit or assets are used for this social purpose, and show that an asset lock is in place. We will ask for a copy of your governing documents as part of your application.
        </p>
        <p style={{ width: '700px'}}>
            <a className="link link--purple" href="/funding/applying-for-grants/what-we-fund">More information</a>
        </p>
        <div style={{display: 'flex'}}>
            <button className="btn btn--red" href="#">Yes</button>
            <button className="btn btn--red">
                No
            </button>
        </div>
        </main>
    </React.Fragment>
)