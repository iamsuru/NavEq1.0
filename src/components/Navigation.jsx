import React from 'react'

function Navigation() {
    return (
        <div className='navigation-panel'>
            <form>
                <h1>Navigation</h1>
                <label htmlFor='from' className='mt-3 mb-3 current-label'>Current Location</label>
                <div className="input-with-icon d-flex align-items-center">
                    <input type='search' list='to' id='from' required className='form-select mt-3 mb-3' placeholder='Choose Room Number/Location' />
                    <i className="fa-solid fa-location-dot icon ms-3"></i>
                </div>
                <datalist id="to">
                    <option value="Entry Exit">Enterance OR Exit of College</option>
                    <option value="Room G01">Principal</option>
                    <option value="Room G02">Staff Room</option>
                    <option value="Room G03">G03</option>
                    <option value="Room G04">PE Lab / Network Lab</option>
                    <option value="Room G05">Physics Lab / Exam Control room</option>
                    <option value="WaterFilter">Water Filter</option>
                    <option value="Room G06">CAD Lab</option>
                    <option value="Girls Washroom">Girls WashRoom</option>
                    <option value="Room G07">G07</option>
                    <option value="Room G08">EMEC Lab / Basic EE Lab</option>
                    <option value="Room G09">G09</option>
                    <option value="Room G10">HOD EX/EE / Simultaneous Lab</option>
                    <option value="Room G11">G11</option>
                    <option value="Room G12">G12</option>
                    <option value="Room G13">Power System Lab</option>
                    <option value="HOD ME">HOD ME</option>
                    <option value="Room G15">G15</option>
                    <option value="Room G18">Workshop</option>
                    <option value="Boys Washroom">Boys WashRoom</option>
                    <option value="Room G19">Staff Room</option>
                    <option value="Room G20">BME Lab</option>
                    <option value="Room G21">RAC Lab</option>
                    <option value="Room G22">HMT Lab</option>
                    <option value="Room G23">Chemistry Lab</option>
                    <option value="Room G24">Mechanics Lab</option>
                    <option value="Second College">To SRIST(2nd College)</option>
                    <option value="Auditorium">Auditorium</option>
                    <option value="Fountain">Fountain</option>
                    <option value="HOD CE">Civil Department</option>
                    <option value="Room G25">G25</option>
                    <option value="Room G26">G26</option>
                    <option value="Room G27">PPT Hall</option>
                    <option value="Room G28">G28</option>
                    <option value="Room G29">IT Lab 3</option>
                    <option value="Girls Washroom">Girls WashRoom</option>
                    <option value="HOD IT">HOD IT</option>
                    <option value="Room G30">IT Lab 1</option>
                    <option value="Room G31">IT Lab 2</option>
                    <option value="Room G32">G32</option>
                    <option value="Room G33">G33</option>
                    <option value="Room G34">Account Office</option>
                    <option value="Room G35">G35</option>
                    <option value="WaterFilter">Water Filter</option>
                    <option value="Boys Washroom">Boys WashRoom</option>
                    <option value="Room G36">G36</option>
                    <option value="Room G37">Communication Skill Lab</option>
                    <option value="Room G38">G38</option>
                    <option value="Room G39">G39</option>
                    <option value="Room G40">G40</option>
                    <option value="Room G41">G41</option>
                    <option value="Room G42">Director</option>
                    {/* First Floor DataList */}
                    <option value="To Ground Floor">Stairs for Ground Floor</option>
                    <option value="Room 101">101</option>
                    <option value="Room 102">EC Lab 1</option>
                    <option value="Room 103">EC Lab 2</option>
                    <option value="Room 105">Seminar Hall</option>
                    <option value="Room 106">EDC Lab</option>
                    <option value="Room 107">Store Room</option>
                    <option value="Room 108">EC / TV Lab</option>
                    <option value="Room 109">109</option>
                    <option value="Room 110">HOD EC</option>
                    <option value="Room 111">111</option>
                    <option value="Room 112">112</option>
                    <option value="Room 113">113</option>
                    <option value="Room 114">Project Lab</option>
                    <option value="Room 115">115</option>
                    <option value="Room 116">116</option>
                    <option value="Room 117">IM / DCS / OP COM Lab</option>
                    <option value="Room 118">118</option>
                    <option value="Room 119">119</option>
                    <option value="Room 120">120</option>
                    <option value="Room 121">121</option>
                    <option value="Room 122">122</option>
                    <option value="Room 123">123</option>
                    <option value="Room 124">124</option>
                    <option value="Room 125">CP Lab 5</option>
                    <option value="Room 126">CP Lab 4</option>
                    <option value="Room 127">127</option>
                    <option value="HOD CS">HOD CS</option>
                    <option value="Room 128">CP Lab 1</option>
                    <option value="Room 129">CP Lab 2</option>
                    <option value="Room 130">CP Lab 3</option>
                    <option value="Room 131">Staff Room</option>
                    <option value="Room 132">MCA Principal</option>
                    <option value="Room 133">MCA Lab</option>
                    <option value="Room 134">134</option>
                    <option value="Room 135">135</option>
                    <option value="Room 136">136</option>
                </datalist>
                <label htmlFor='destination' className='mt-3 mb-3 destination-label'>Destination Location</label>
                <div className="input-with-icon d-flex align-items-center">
                    <input type='search' list='to' id='from' required className='form-select mt-3 mb-3' placeholder='Choose Room Number/Location' />
                    <i className="fa-solid fa-location-dot icon ms-3"></i>
                </div>
                <datalist id="to">
                    <option value="Entry Exit">Enterance OR Exit of College</option>
                    <option value="Room G01">Principal</option>
                    <option value="Room G02">Staff Room</option>
                    <option value="Room G03">G03</option>
                    <option value="Room G04">PE Lab / Network Lab</option>
                    <option value="Room G05">Physics Lab / Exam Control room</option>
                    <option value="WaterFilter">Water Filter</option>
                    <option value="Room G06">CAD Lab</option>
                    <option value="Girls Washroom">Girls WashRoom</option>
                    <option value="Room G07">G07</option>
                    <option value="Room G08">EMEC Lab / Basic EE Lab</option>
                    <option value="Room G09">G09</option>
                    <option value="Room G10">HOD EX/EE / Simultaneous Lab</option>
                    <option value="Room G11">G11</option>
                    <option value="Room G12">G12</option>
                    <option value="Room G13">Power System Lab</option>
                    <option value="HOD ME">HOD ME</option>
                    <option value="Room G15">G15</option>
                    <option value="Room G18">Workshop</option>
                    <option value="Boys Washroom">Boys WashRoom</option>
                    <option value="Room G19">Staff Room</option>
                    <option value="Room G20">BME Lab</option>
                    <option value="Room G21">RAC Lab</option>
                    <option value="Room G22">HMT Lab</option>
                    <option value="Room G23">Chemistry Lab</option>
                    <option value="Room G24">Mechanics Lab</option>
                    <option value="Second College">To SRIST(2nd College)</option>
                    <option value="Auditorium">Auditorium</option>
                    <option value="Fountain">Fountain</option>
                    <option value="HOD CE">Civil Department</option>
                    <option value="Room G25">G25</option>
                    <option value="Room G26">G26</option>
                    <option value="Room G27">PPT Hall</option>
                    <option value="Room G28">G28</option>
                    <option value="Room G29">IT Lab 3</option>
                    <option value="Girls Washroom">Girls WashRoom</option>
                    <option value="HOD IT">HOD IT</option>
                    <option value="Room G30">IT Lab 1</option>
                    <option value="Room G31">IT Lab 2</option>
                    <option value="Room G32">G32</option>
                    <option value="Room G33">G33</option>
                    <option value="Room G34">Account Office</option>
                    <option value="Room G35">G35</option>
                    <option value="WaterFilter">Water Filter</option>
                    <option value="Boys Washroom">Boys WashRoom</option>
                    <option value="Room G36">G36</option>
                    <option value="Room G37">Communication Skill Lab</option>
                    <option value="Room G38">G38</option>
                    <option value="Room G39">G39</option>
                    <option value="Room G40">G40</option>
                    <option value="Room G41">G41</option>
                    <option value="Room G42">Director</option>
                    {/* First Floor DataList */}
                    <option value="To Ground Floor">Stairs for Ground Floor</option>
                    <option value="Room 101">101</option>
                    <option value="Room 102">EC Lab 1</option>
                    <option value="Room 103">EC Lab 2</option>
                    <option value="Room 105">Seminar Hall</option>
                    <option value="Room 106">EDC Lab</option>
                    <option value="Room 107">Store Room</option>
                    <option value="Room 108">EC / TV Lab</option>
                    <option value="Room 109">109</option>
                    <option value="Room 110">HOD EC</option>
                    <option value="Room 111">111</option>
                    <option value="Room 112">112</option>
                    <option value="Room 113">113</option>
                    <option value="Room 114">Project Lab</option>
                    <option value="Room 115">115</option>
                    <option value="Room 116">116</option>
                    <option value="Room 117">IM / DCS / OP COM Lab</option>
                    <option value="Room 118">118</option>
                    <option value="Room 119">119</option>
                    <option value="Room 120">120</option>
                    <option value="Room 121">121</option>
                    <option value="Room 122">122</option>
                    <option value="Room 123">123</option>
                    <option value="Room 124">124</option>
                    <option value="Room 125">CP Lab 5</option>
                    <option value="Room 126">CP Lab 4</option>
                    <option value="Room 127">127</option>
                    <option value="HOD CS">HOD CS</option>
                    <option value="Room 128">CP Lab 1</option>
                    <option value="Room 129">CP Lab 2</option>
                    <option value="Room 130">CP Lab 3</option>
                    <option value="Room 131">Staff Room</option>
                    <option value="Room 132">MCA Principal</option>
                    <option value="Room 133">MCA Lab</option>
                    <option value="Room 134">134</option>
                    <option value="Room 135">135</option>
                    <option value="Room 136">136</option>
                </datalist>
                <button type="submit" className="btn btn-warning mt-3">Find Path</button>
            </form>
        </div>
    )
}

export default Navigation