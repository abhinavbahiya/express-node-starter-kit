//

async function getDisclaimer(req, res) {
  // 
  try {
    // CALL SERVICE TO DO MAIN LOGIC, PASS ONLY BODY OR PARAAM
    res.status(200).json({
      DisclaimerText: 'Something'
    });
  } catch(error) {
    // Log error
    res.status(500).json({
      Message: 'Internal Server Error'
    })
  }
}

module.exports = {getDisclaimer}