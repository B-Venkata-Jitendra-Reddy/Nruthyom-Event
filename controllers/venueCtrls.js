exports.getVenuePage = (req, res) => {
    res.render("venue", {
        title: 'Venue'
    });
}