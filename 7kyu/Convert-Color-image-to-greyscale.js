return image.map(row =>
    row.map(([r, g, b]) => {
      const sum = Math.round((r + g + b) / 3)
      return [sum, sum, sum]
    }))