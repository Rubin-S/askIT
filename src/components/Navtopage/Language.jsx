import React, { useState } from 'react'
import './styles/Language.css'

const Language = () => {
	const languages = [
		{ value: 'english', label: 'English' },
		{ value: 'spanish', label: 'Spanish' },
		{ value: 'french', label: 'French' },
		{ value: 'german', label: 'German' },
		{ value: 'chinese', label: 'Chinese (Simplified)' },
		{ value: 'chinese-traditional', label: 'Chinese (Traditional)' },
		{ value: 'japanese', label: 'Japanese' },
		{ value: 'korean', label: 'Korean' },
		{ value: 'hindi', label: 'Hindi' },
		{ value: 'arabic', label: 'Arabic' },
		{ value: 'portuguese', label: 'Portuguese' },
		{ value: 'russian', label: 'Russian' },
		{ value: 'italian', label: 'Italian' },
		{ value: 'turkish', label: 'Turkish' },
		{ value: 'dutch', label: 'Dutch' },
		{ value: 'swedish', label: 'Swedish' },
		{ value: 'danish', label: 'Danish' },
		{ value: 'norwegian', label: 'Norwegian' },
		{ value: 'finnish', label: 'Finnish' },
		{ value: 'greek', label: 'Greek' },
		{ value: 'thai', label: 'Thai' },
		{ value: 'vietnamese', label: 'Vietnamese' },
		{ value: 'polish', label: 'Polish' },
		{ value: 'ukrainian', label: 'Ukrainian' },
		{ value: 'hebrew', label: 'Hebrew' },
		{ value: 'czech', label: 'Czech' },
		{ value: 'hungarian', label: 'Hungarian' },
		{ value: 'romanian', label: 'Romanian' },
		{ value: 'indonesian', label: 'Indonesian' },
		{ value: 'malay', label: 'Malay' },
		{ value: 'filipino', label: 'Filipino' },
		{ value: 'swahili', label: 'Swahili' },
		{ value: 'bengali', label: 'Bengali' },
		{ value: 'tamil', label: 'Tamil' },
		{ value: 'telugu', label: 'Telugu' },
		{ value: 'marathi', label: 'Marathi' },
		{ value: 'urdu', label: 'Urdu' },
		{ value: 'persian', label: 'Persian' },
		{ value: 'punjabi', label: 'Punjabi' },
		{ value: 'gujarati', label: 'Gujarati' },
		{ value: 'amharic', label: 'Amharic' },
		{ value: 'somali', label: 'Somali' },
	]

	const [searchTerm, setSearchTerm] = useState('')
	const [filteredLanguages, setFilteredLanguages] = useState(languages)

	const handleSearch = (event) => {
		const value = event.target.value.toLowerCase()
		setSearchTerm(value)
		setFilteredLanguages(
			languages.filter((lang) => lang.label.toLowerCase().includes(value))
		)
	}

	const handleSelect = (language) => {
		setSearchTerm(language.label) // Set the selected language directly in the input
	}

	return (
		<div className="language-selector">
			<h3 className="header-title">Set Language</h3>
			<p className="header-subtitle">
				Search and select your preferred language
			</p>

			<input
				type="text"
				className="language-input"
				placeholder="Search for a language..."
				value={searchTerm}
				onChange={handleSearch}
			/>

			{searchTerm && !languages.find((lang) => lang.label === searchTerm) && (
				<ul className="language-dropdown-list">
					{filteredLanguages.length > 0 ? (
						filteredLanguages.map((language) => (
							<li
								key={language.value}
								className="language-dropdown-item"
								onClick={() => handleSelect(language)}>
								{language.label}
							</li>
						))
					) : (
						<li className="language-dropdown-item">No results found</li>
					)}
				</ul>
			)}
		</div>
	)
}

export default Language
